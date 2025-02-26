export default class ImageCarousel{
    constructor(){
        this.imagesContainer = document.querySelector(".imagesContainer");
        this.dots = document.querySelectorAll(".dot");
        this.arrows = document.querySelectorAll("a");
        this.author = document.querySelector(".author");
        this.authorLink = document.querySelector(".authorLink");
        this.listArray = [...this.imagesContainer.children];
        this.dotsArray = [...this.dots]
        this.currentImageIndex = 0
        this.intervalID
        this.init()
    }
    init(){
        this.eventListeners()
        this.showImage()
        this.startInterval()
    }
    eventListeners(){
        document.addEventListener("keydown", this.changeImage)
        this.arrows.forEach(arrow=>arrow.addEventListener('click', this.changeImage))
        this.dots.forEach(dot=> dot.addEventListener('click', this.changeImage))
    }
    hideImages(){
        this.listArray.at(this.currentImageIndex).className='disappearImg'
        this.dotsArray.at(this.currentImageIndex).classList.remove('current')
    }
    showImage(){
        this.dotsArray.at(this.currentImageIndex).classList.add('current')
        this.listArray.at(this.currentImageIndex).className= 'visible'
        this.changeAuthor()
    }
    changeImage = (e)=>{
        if(e.target.className == 'next' || e.code =='ArrowRight'){
            this.changeIndex('+')
        }else if(e.target.className == 'prev' || e.code =='ArrowLeft'){
            this.changeIndex('-')
        }else if(e.target.className === 'dot'){
           this.currentImageIndex = e.target.id
        }
        this.restartInterval()
        
    }
    changeAuthor(){
        this.author.textContent= this.listArray.at(this.currentImageIndex).dataset.author
        this.authorLink.href= this.listArray.at(this.currentImageIndex).dataset.link
    }
    changeIndex(plus_minus){
        this.hideImages()
        if(plus_minus == '+'){
            this.currentImageIndex = this.currentImageIndex == 5? 0: (this.currentImageIndex + 1) 
        }else if(plus_minus == '-'){
            this.currentImageIndex = this.currentImageIndex == 0?  5: (this.currentImageIndex - 1)
        }
        this.showImage()
    }
    startInterval(){
        this.intervalID= setInterval(()=>{this.changeIndex('+')}, 5000)
    }
    restartInterval(){
        clearInterval(this.intervalID)
        this.startInterval()
    }

}