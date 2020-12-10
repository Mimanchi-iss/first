/*
  渐隐渐现轮播图

  分析:
    1. 设置焦点
    2. 自动轮播的时候
      => 当前这一张消失, 下一张显示
    3. 移入移出
    4. 左右切换
      => 左: 当前这一张消失, 上一张显示
      => 右: 当前这一张消失, 下一张显示
    5. 焦点切换
      => 当前这一张消失, 指定索引那一张显示
    6. 切换页面

  代码实现
    + 属性
      1. 范围元素
      2. imgBox
      3. pointBox
      4. leftRightBox
      5. 索引(默认值是多少 0)
      6. 定时器返回值
    + 方法
      1. 入口函数
      2. 设置焦点
      3. 切换一张
        3-1. 让当前这一张消失 opacity 为 0
        3-2. 修改 index
          => 修改的时候, 不直接告诉你修改到第几张
          => 多样选择的参数,
          => 如果我给你的 true, 那么执行下一张
          => 如果我给你的是 false, 那么执行上一张
          => 如果我给你的是数字, 那么就执行指定哪一张
        3-3. 让当前这一张显示 opacity 为 1
        3-4. 让焦点直接联动
          => 因为焦点的索引和图片的索引一模一样
      4. 自动轮播
        4-1. 开启定时器
        4-2. 让他切换到下一张
        4-3. 当 index ++ 或者 -- 之后要改变 index 的值
          => 当 index >= length 的时候, 要改变为 0
          => 当 index < 0 的时候, 要改变为 length - 1
*/

class Banner {
  constructor(ele) {
    // 1. 范围元素
    this.ele = document.querySelector(ele)
    // 2. imgBox
    this.imgBox = this.ele.querySelector('.imgBox')
    // 3. pointBox
    this.pointBox = this.ele.querySelector('.pointBox')
    // 4. leftRightBox
    this.leftRightBox = this.ele.querySelector('.leftRightBox')
    // 5. 索引
    this.index = 0
    // 6. 定时器返回值
    this.timer = 0
    // console.log(this.imgBox)

    // 直接启动入口函数
    this.init()
  }

  // 1. 入口函数
  init() {
    this.setPoint()
    this.autoPlay()
    this.overOut()
    this.leftRight()
    this.pointEvent()
    this.changePage()
  }

  // 2. 设置焦点
  setPoint() {
    const pointNum = this.imgBox.children.length

    const frg = document.createDocumentFragment()
    for (let i = 0; i < pointNum; i++) {
      const li = document.createElement('li')
      if (i === 0) li.className = 'active'
      li.setAttribute('i', i)
      frg.appendChild(li)
    }

    this.pointBox.appendChild(frg)
    this.pointBox.style.width = pointNum * 20 * 1.5 + 'px'
  }

  // 3. 切换一张
  changeOne(type) {
    // 3-1. 让当前这一张消失
    // 此时 this.index === 0
    this.imgBox.children[this.index].classList.remove('active')
    // 3-4. 焦点同时联动
    this.pointBox.children[this.index].classList.remove('active')

    // 3-2. 修改 index 为 n
    if (type === true) {
      this.index++
    } else if (type === false) {
      this.index--
    } else {
      this.index = type
    }

    // 4-3. 调整一下 index
    if (this.index >= this.imgBox.children.length) this.index = 0
    if (this.index < 0) this.index = this.imgBox.children.length - 1

    // 3-3. 让当前这一张显示
    // 此时 this.index 就是传递进来的 n
    this.imgBox.children[this.index].classList.add('active')
    // 3-4. 焦点同时联动
    this.pointBox.children[this.index].classList.add('active')
  }

  // 4. 自动轮播
  autoPlay() {
    // 4-1. 开启定时器
    this.timer = setInterval(() => {
      // 4-2. 切换到下一张
      this.changeOne(true)
    }, 2000)
  }

  // 5. 移入移出
  overOut() {
    this.ele.addEventListener('mouseover', () => clearInterval(this.timer))
    this.ele.addEventListener('mouseout', () => this.autoPlay())
  }

  // 6. 左右切换
  leftRight() {
    this.leftRightBox.addEventListener('click', e => {
      e = e || window.event
      const target = e.target || e.srcElement

      if (target.className === 'left') {
        this.changeOne(false)
      }

      if (target.className === 'right') {
        this.changeOne(true)
      }
    })
  }

  // 7. 焦点切换
  pointEvent() {
    this.pointBox.addEventListener('click', e => {
      e = e || window.event
      const target = e.target || e.srcElement

      if (target.nodeName === 'LI') {
        const i = target.getAttribute('i') - 0
        this.changeOne(i)
      }
    })
  }

  // 8. 切换页面
  changePage() {
    document.addEventListener('visibilitychange', () => {
      const state = document.visibilityState

      if (state === 'hidden') clearInterval(this.timer)
      if (state === 'visible') this.autoPlay()
    })
  }
}
