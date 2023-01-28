const ACCORDION_ITEM_HEADER = document.querySelectorAll(
  ".accordion-item-header"
)

ACCORDION_ITEM_HEADER.forEach((header) => {
  const ARROW_ICON = header.querySelector("#arrow-icon")

  header.addEventListener("click", (e) => {
    e.preventDefault()
    header.classList.toggle("active")
    const ACCORDION_ITEM_BODY = header.nextElementSibling

    if (header.classList.contains("active")) {
      ACCORDION_ITEM_BODY.style.maxHeight =
        ACCORDION_ITEM_BODY.scrollHeight + "px"
      ARROW_ICON.style.transform = "scaleY(-1)"
    } else {
      ACCORDION_ITEM_BODY.style.maxHeight = 0
      ARROW_ICON.style.transform = "scaleY(1)"
    }
  })
})
