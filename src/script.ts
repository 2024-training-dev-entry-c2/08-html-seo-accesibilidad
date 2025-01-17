document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".works__toggle");
  
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const iconContainer = toggle.querySelector(
          ".works__icon--container"
        ) as HTMLElement;
        const content = toggle.closest(".works__content") as HTMLElement;
        const extraInfo = toggle.parentElement?.querySelector(
          ".works__extra-info"
        ) as HTMLElement;
  

        const isOpen = iconContainer?.getAttribute("data-is-open") === "true";
  
        if (isOpen) {

          extraInfo?.setAttribute("data-is-open", "false");
          iconContainer?.setAttribute("data-is-open", "false");
          content?.setAttribute("data-is-open", "false");
  

          const horizontalLine = iconContainer.querySelector(
            ".plus__horizontal-line"
          ) as HTMLElement;
          horizontalLine.style.transform = "translate(-50%, -50%) rotate(0deg)";  
        } else {
          extraInfo?.setAttribute("data-is-open", "true");
          iconContainer?.setAttribute("data-is-open", "true");
          content?.setAttribute("data-is-open", "true");
  
          const horizontalLine = iconContainer.querySelector(
            ".plus__horizontal-line"
          ) as HTMLElement;
          horizontalLine.style.transform = "translate(-50%, -50%) rotate(-90deg)";  
        }
      });
    });
  });
  