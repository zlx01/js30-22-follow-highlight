const highlightSpan = document.createElement('span')
highlightSpan.classList.add('highlight')
document.body.appendChild(highlightSpan)

const anchorList = document.querySelectorAll('a[href=""]');
anchorList.forEach(item => {
  item.addEventListener('mouseover', (e) => {
    const linkCoords = e.target.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      // 注意加上滚动距离
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };

    highlightSpan.style.width = `${coords.width}px`;
    highlightSpan.style.height = `${coords.height}px`;
    highlightSpan.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  })
})

