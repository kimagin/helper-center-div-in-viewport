'use strict'
//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

// Setup before DOM loads
const initApp = async () => {
  const grid = select('.grid-container')
  const items = document.querySelectorAll('.grid-item')
  const windwoH = window.innerHeight
  const windowW = window.innerWidth
  const body = select('body')
  items.forEach((item, index) => {
    const idx = index
    item.addEventListener('click', (e) => {
      // cloneItem(e)
      cloneItem(e.target, idx)
      let unselected = []
      const notSelected = items.forEach((item) => {
        item !== e.target ? unselected.push(item) : ''
      })
      unselected.forEach((item) => {
        item.classList.add('opacity-0')
      })
    })
  })

  function cloneItem(item, index) {
    const clone = item.cloneNode(item)
    item.classList.add('opacity-0')
    console.log(item.getBoundingClientRect())
    clone.classList.add('absolute', 'top-0', 'left-0')
    clone.style.width = item.getBoundingClientRect().width + 'px'
    clone.style.height = item.getBoundingClientRect().height + 'px'

    //Positions

    //Initial Positions
    const initialTop = item.getBoundingClientRect().top + 'px'
    const initialLeft = item.getBoundingClientRect().left + 'px'

    //Final Positions
    const finalTop =
      window.innerHeight / 2 - item.getBoundingClientRect().height / 2 + 'px'

    const finalLeft =
      window.innerWidth / 2 - item.getBoundingClientRect().width / 2 + 'px'

    clone.style.top = initialTop
    clone.style.left = initialLeft
    select('.modal').appendChild(clone)

    setTimeout(() => {
      clone.style.top = finalTop
      clone.style.left = finalLeft
      clone.classList.add('scale-[3]', 'transition-all')
      setTimeout(() => {
        clone.style.color = 'white'
        clone.style.backgroundColor = '#18181b'
      }, 1200)
    }, 1000)
  }
}

document.addEventListener('DOMContentLoaded', initApp)

// 🚩 Client-side JS Code comes here
