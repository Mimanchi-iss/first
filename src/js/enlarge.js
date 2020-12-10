class Enlarge {
  constructor(ele) {
    this.ele = document.querySelector(ele)

    this.show = this.ele.querySelector('.show')
    console.log(this.show);
    this.mask = this.ele.querySelector('.mask')
    this.list = this.ele.querySelector('.list')
    this.enlarge = this.ele.querySelector('.enlarge')
    console.log(this.enlarge)
    this.show_width = this.show.clientWidth
    // console.log(this.show_width)
    this.show_height = this.show.clientHeight
    // console.log(this.show_height)



    this.enlarge_width = parseInt(window.getComputedStyle(this.enlarge).width)
    console.log(this.enlarge_width)

    this.enlarge_height = parseInt(window.getComputedStyle(this.enlarge).height)
    console.log(this.enlarge_height)

    this.bg_width = parseInt(window.getComputedStyle(this.enlarge).backgroundSize.split(' ')[0])
    this.bg_height = parseInt(window.getComputedStyle(this.enlarge).backgroundSize.split(' ')[1])
    console.log(this.bg_width)
    console.log(this.bg_height)

    this.init()

  }

  init() {
    this.setScale()
    this.move()
    this.overOut()
    this.changeList()
  }

  setScale() {
    this.mask_width = this.show_width * this.enlarge_width / this.bg_width
    this.mask_height = this.show_height * this.enlarge_height / this.bg_height
    this.mask.style.width = this.mask_width + 'px'
    this.mask.style.height = this.mask_height + 'px'

    console.log(this.mask_width);
  }

  overOut() {
    console.log(2);
    console.log(this.show);
    this.show.addEventListener('mouseover', () => {
      console.log(1111);
      this.mask.style.display = 'block'
      this.enlarge.style.display = 'block'
    })
    this.show.addEventListener('mouseout', () => {
      this.mask.style.display = 'none'
      this.enlarge.style.display = 'none'
    })
  }

  move() {
    this.show.addEventListener('mousemove', (e) => {
      e = e || window.event
      let x = e.offsetX - this.mask_width / 2
      let y = e.offsetY - this.mask_height / 2
      console.log(e.offsetX)
      console.log(e.offsetY)
      console.log(x)
      console.log(y)

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x >= this.show_width - this.mask_width) x = this.show_width - this.mask_width
      if (y >= this.show_height - this.mask_height) y = this.show_height - this.mask_height
      this.mask.style.left = x + 'px'
      this.mask.style.top = y + 'px'

      const bg_x = this.enlarge_width * x / this.mask_width
      const bg_y = this.enlarge_height * y / this.mask_height

      this.enlarge.style.backgroundPosition = `-${bg_x}px -${bg_y}px`
    })
  }

  changeList() {
    this.list.addEventListener('click', (e) => {
      e = e || window.event
      const target = e.target || e.srcElement
      if (target.nodeName === 'IMG') {
        const show_url = target.getAttribute('show')
        const enlarge_bg = target.getAttribute('enlarge')

        this.show.firstElementChild.src = show_url
        this.enlarge.style.backgroundImage = `url(${enlarge_bg})`

        for (let i = 0; i < this.list.children.length; i++) {
          this.list.children[i].classList.remove('active')
        }
        target.parentElement.classList.add('active')
      }
    })
  }
}