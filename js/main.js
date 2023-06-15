    // JavaScript code
    let wrapper = document.querySelector('.wrapper');
    let draggableDiv;
    let createCardBtn = document.getElementById('createCardBtn');
    let initialX, initialY;

    // Function to handle mouse down event
    function dragMouseDown(e) {
      e.preventDefault();
      draggableDiv = e.target;
      draggableDiv.classList.add('upper');
      initialX = e.clientX - draggableDiv.offsetLeft;
      initialY = e.clientY - draggableDiv.offsetTop;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    // Function to drag the element
    function elementDrag(e) {
      e.preventDefault();
//      console.log('Y:',(e.clientY - initialY)  )
//      console.log('X:',(e.clientX - initialX)  )
      draggableDiv.style.top = (e.clientY - initialY) + "px";
      draggableDiv.style.left = (e.clientX - initialX) + "px";
    }

    // Function to handle mouse up event
    function closeDragElement(e) {
        draggableDiv.classList.remove('upper');
        document.onmouseup = null;
        document.onmousemove = null;
    }

    

    createCardBtn.onclick = function createCard() {
        const divElm = document.createElement('div');
        divElm.classList.add('card');
        divElm.setAttribute('contenteditable', 'true')
        const r = genColor();
        const g = genColor();
        const b = genColor();
        // Attach event listener to handle dragging
        divElm.onmousedown = dragMouseDown;
        divElm.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        divElm.ondblclick = (e) => {e.target.focus()}

        wrapper.appendChild(divElm);
    }

    function genColor() {
        const number = Math.floor(Math.random() * 256);
        return number;
    }