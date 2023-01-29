const ACCORDION_ITEM_HEADER = document.querySelectorAll(
  ".accordion-item-header"
)

ACCORDION_ITEM_HEADER.forEach((header) => {
  const ARROW_ICON = header.querySelector("#arrow-icon")

  header.addEventListener("click", (e) => {
    e.preventDefault()
    // Close all accordion items before opening the one that was clicked on
    if (header.classList.contains("active")) {
      header.classList.remove("active")
      const ACCORDION_ITEM_BODY = header.nextElementSibling
      ACCORDION_ITEM_BODY.style.maxHeight = 0
      ARROW_ICON.style.transform = "scaleY(1)"
    } else {
      ACCORDION_ITEM_HEADER.forEach((header) => {
        header.classList.remove("active")
        const ACCORDION_ITEM_BODY = header.nextElementSibling
        ACCORDION_ITEM_BODY.style.maxHeight = 0
        header.querySelector("#arrow-icon").style.transform = "scaleY(1)"
      })

      // Open the clicked on accordion item
      header.classList.add("active")
      const ACCORDION_ITEM_BODY = header.nextElementSibling
      ACCORDION_ITEM_BODY.style.maxHeight =
        ACCORDION_ITEM_BODY.scrollHeight + "px"
      ARROW_ICON.style.transform = "scaleY(-1)"
    }
  })
})
