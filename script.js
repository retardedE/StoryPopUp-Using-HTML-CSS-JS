const likeButton=document.querySelector('.likeBtn')
let isLiked=false
likeButton.addEventListener('click',()=>{
    if(isLiked==false){
        likeButton.setAttribute('class','bx bxs-heart')
        likeButton.style.color='red'
        isLiked=true
    }else{
        likeButton.setAttribute('class','bx bx-heart')
        likeButton.style.color='white'
        isLiked=false
    }
})