 // 0. 获取 ul
 const ul = document.querySelector('.search-result')

 // 1. 给 文本框 绑定给一个 input 事件
 const inp = document.querySelector('input')
 inp.addEventListener('input', function () {

   // 2. 拿到文本框输入的内容
   // trim() 去除首位空格
   const value = this.value.trim()
   if (!value) return

   // 3. 准备发送请求
   // 动态创建 script 标签
   const script = document.createElement('script')
   // 准备一个请求地址
   // wd 这个参数要换成我文本框里面输入的内容
   const url = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1446,32857,33124,33061,32973,33099,33101,32962,22159&wd=${value}&req=2&csor=1&cb=bindHtml&_=1605768936993`
   script.src = url
   // 把 script 标签插入到页面里面
   document.body.appendChild(script)
   // 当 script 标签插入到页面里面的时候, 等到响应回来
   // 就会调用 bindHtml 的方法
   // 我需要提前准备
   // 函数写在全局, 还是写在这个事件里面 ?
   //   全局: 必须写在全局
   //   因为你相当于在页面里面多加了一个 script 标签
   //   script 标签里面的内容就是 bindHtml(xxx)
   // 使用 script 标签的目的是为了把请求发送出去
   // 当 script 标签插入到页面里面的挥手, 请求已经发送出去了
   // 此时, script 标签已经没有用了
   script.remove()
 })

 // 全局准备一个 jsonp 的处理函数
 function bindHtml(res) {
   console.log(res)
   /*
     res 是人家服务器给我们返回的数据, 是一个对象数据类型
     {
       g: 是应该显示的列表数组,
       p: false,
       q: 'ai',
       queryid: 'xxxx'
     }
     循环遍历就应该遍历 res.g

     res.g 是一个列表数组
     [
       { type: 'sug', sa: 's_1', q: 'ai1' },
       { type: 'sug', sa: 's_1', q: 'ai2' },
       { type: 'sug', sa: 's_1', q: 'ai3' },
       { type: 'sug', sa: 's_1', q: 'ai4' },
       { type: 'sug', sa: 's_1', q: 'ai5' },
     ]

     res.g[0] 得到的就是一个对象数据类型 { type: 'sug', sa: 's_1', q: 'ai1' }
     拿到里面的 q 成员
     res.g[0].q
     res.g[1].q
     在循环内
     res.g[i].q
   */
  console.log(res.q.length)

   // 没有 g 这个数据, 就不渲染页面了
   if (!res.g) {
     ul.classList.remove('active')
     return
   }

   // 代码来到这里, 表示有 g 这个数据, 渲染页面
   let str = ''

   for (let i = 0; i < res.g.length; i++) {
     str += `
       <li>${ res.g[i].q }</li>
     `
   }

   ul.innerHTML = str
   // 让 ul 显示出来
   ul.classList.add('active')
 }