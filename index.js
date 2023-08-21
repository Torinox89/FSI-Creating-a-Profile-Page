let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let container = document.createElement ('div')
container.setAttribute('class', 'dog-content')
content.append(container)

  let img = document.createElement('img')
    img.setAttribute('class', 'dog-image')
    img.setAttribute('src', './assets/rizzo.jpg')
    container.append(img)

  let detail = document.createElement('div')
    detail.setAttribute('class', 'dog-details')
    container.append(detail)

    let headerdesc = document.createElement('h3')
      headerdesc.append('Description')
      detail.append(headerdesc)

    let paragraph1 = document.createElement('p')
      paragraph1.append('This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her, and dislikes other animals') 
      detail.append(paragraph1)
    
    let headerfeed = document.createElement('h3')
      headerfeed.append('Feeding Times')
      detail.append(headerfeed)

    let unlist = document.createElement('ul')
         detail.append(unlist)
         
       let list1 = document.createElement('li')
         list1.append('9:00 am')
         unlist.append(list1)
        
       let list2 = document.createElement('li')
         list2.append('12:00 pm')
         unlist.append(list2)

         let list3 = document.createElement('li')
         list3.append('5:00 pm')
         unlist.append(list3)


//addEventListener() on container (the 'div')
//wiht conditional to revers the changes.
  //container.addEventListener('click', function(e){
  //e.target.style.backgroundColor = 'blue';
  //e.target.style.color = 'white';
  //})

  container.addEventListener('click', function(e){
    if(e.target.style.backgroundColor == 'blue')
    {
      e.target.style.backgroundColor == 'white'
    } else {
      e.target.style.backgroundColor == 'blue'
    }
  })
























