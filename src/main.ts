document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  let rotation = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollTop > lastScrollTop;
    const svgs = document.querySelectorAll<SVGElement>(".duties__nav-link svg");
    const scrollAmount = Math.abs(scrollTop - lastScrollTop);
    const rotationAmount = Math.min(scrollAmount / 5, 15);

    rotation += isScrollingDown ? rotationAmount : -rotationAmount;

    svgs.forEach((svg) => {
      svg.style.transform = `rotate(${rotation}deg)`;
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  const navLinks =
    document.querySelectorAll<HTMLAnchorElement>(".duties__nav-link");

  navLinks.forEach((link) => {
    let originalTransform: string;

    link.addEventListener("mouseover", () => {
      const svgs = link.querySelectorAll<SVGElement>("svg");
      svgs.forEach((svg) => {
        originalTransform = svg.style.transform;
        svg.classList.remove("stop-spin");
        svg.style.animation =
          "spin 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";
      });
    });

    link.addEventListener("mouseout", () => {
      const svgs = link.querySelectorAll<SVGElement>("svg");
      svgs.forEach((svg) => {
        svg.classList.add("stop-spin");
        svg.style.animation =
          "spin-reverse 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";
      });
    });

    link.querySelectorAll<SVGElement>("svg").forEach((svg) => {
      svg.addEventListener("animationend", () => {
        svg.style.transform = originalTransform;
      });
    });
  });

  const scrambleTextElements = document.querySelectorAll(".scramble-text");

  scrambleTextElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      const originalText = element.getAttribute("data-text");
      const scrambleDuration = 250;
      const iterations = 10;
      const scrambleInterval = scrambleDuration / iterations;

      let iteration = 0;
      const scrambleIntervalId = setInterval(() => {
        if (iteration >= iterations) {
          clearInterval(scrambleIntervalId);
          element.textContent = originalText;
        } else {
          element.textContent = partialScrambleText(originalText);
          iteration++;
        }
      }, scrambleInterval);
    });

    element.addEventListener("mouseout", () => {
      const originalText = element.getAttribute("data-text");
      element.textContent = originalText;
    });
  });

  function getRotation(element: SVGElement): number {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return Math.round(Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI));
  }

  function partialScrambleText(text: string | null): string {
    if (!text) return "";
    const scrambleStartIndex = Math.floor(text.length * 0.3);
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let scrambled = text.substring(0, scrambleStartIndex);
    for (let i = scrambleStartIndex; i < text.length; i++) {
      scrambled += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return scrambled;
  }

  const ctaElements = document.querySelectorAll(
    ".duties__project-cta, .duties__about-cta"
  );

  ctaElements.forEach((cta) => {
    const icon = cta.querySelector(
      ".duties__project-cta-icon, .duties__about-cta-icon"
    ) as SVGElement;
    const clone = icon.cloneNode(true) as SVGElement;
    clone.classList.add(
      "duties__project-cta-icon-clone",
      "duties__about-cta-icon-clone"
    );
    cta.appendChild(clone);

    let originalTransform = icon.style.transform;

    cta.addEventListener("mouseenter", () => {
      originalTransform = icon.style.transform;
      icon.style.animation = "moveRight 0.5s forwards";
      clone.style.animation = "appear 0.5s forwards";
    });

    cta.addEventListener("mouseleave", () => {
      icon.style.animation = "moveLeft 0.5s forwards";
      clone.style.animation = "disappear 0.5s forwards";
    });

    icon.addEventListener("animationend", () => {
      icon.style.transform = originalTransform;
    });

    clone.addEventListener("animationend", () => {
      clone.style.transform = originalTransform;
    });
  });
});
