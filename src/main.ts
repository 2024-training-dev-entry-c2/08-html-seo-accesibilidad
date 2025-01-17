document.addEventListener("DOMContentLoaded", () => {
  const accordionItems: NodeListOf<HTMLElement> =
    document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion__title") as HTMLElement;
    const content = item.querySelector(".accordion__content") as HTMLDivElement;

    header.addEventListener("click", () => {
      const isOpen = header.classList.contains("active");

      accordionItems.forEach((otherItem) => {
        const otherHeader = otherItem.querySelector(".accordion__title")!;
        const otherContent = otherItem.querySelector(
          ".accordion__content"
        )! as HTMLDivElement;
        otherHeader.classList.remove("active");
        otherContent.style.maxHeight = "0";
      });

      if (!isOpen) {
        header.classList.add("active");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  });
});
