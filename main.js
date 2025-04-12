const allStories = [
    {
        id: 0,
        author: "Luna Belle",
        imageUrl: "images/1.jpg",
    },

    {
        id: 1,
        author: "Willow Grace",
        imageUrl: "images/2.jpg",
    },

    {
        id: 2,
        author: "Emma Smith",
        imageUrl: "images/3.jpg",
    },

    {
        id: 3,
        author: "Ruby Skye",
        imageUrl: "images/4.jpg",
    },

    {
        id: 4,
        author: "Live Blogger",
        imageUrl: "images/5.jpg",
    },

    {
        id: 5,
        author: "Hazel Jade",
        imageUrl: "images/6.jpg",
    },

    {
        id: 6,
        author: "Eden Faith",
        imageUrl: "images/7.jpg",
    },

    {
        id: 7,
        author: "Flora Maeve",
        imageUrl: "images/8.jpg",
    },

    {
        id: 8,
        author: "Nathaniel Hayes",
        imageUrl: "images/9.jpg",
    },

    {
        id: 9,
        author: "Everett Lee",
        imageUrl: "images/10.jpg",
    },

    {
        id: 10,
        author: "Owen",
        imageUrl: "images/11.jpg",
    },
];

const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".stories-full-view");
const closeFullViewBtn = document.querySelector(".close-btn");
const storiesContent = document.querySelector(".stories-container .content");
const previewBtn = document.querySelector(".stories-container .previous-btn");
const nextBtn = document.querySelector(".stories-container .next-btn");
const previewFullViewBtn = document.querySelector(".stories-full-view .previous-btn");
const nextFullViewBtn = document.querySelector(".stories-full-view .next-btn");

let currentActive = 0;

window.onload = () => {
    console.log("page is loaded");
    createStories()
}

const createStories = () => {
    allStories.forEach((s, i) => {
        const story = document.createElement("div");
        story.classList.add("story");
        const img = document.createElement("img");
        img.src = s.imageUrl;
        const author = document.createElement("div");
        author.classList.add("author");
        author.innerHTML = s.author;

        story.appendChild(img);
        story.appendChild(author);

        stories.appendChild(story);

        story.addEventListener("click", event => {
            showFullView(i);
        })
    })
}

nextBtn.addEventListener("click", event => {
    storiesContent.scrollLeft += 300;
    console.log(scrollX) ;
})

previewBtn.addEventListener("click", event => {
    storiesContent.scrollLeft -= 300;
    console.log(scrollX) ;
})

storiesContent.addEventListener("scroll", event => {
    if (storiesContent.scrollLeft <= 24) {
        previewBtn.classList.remove("active");
    } else {
        previewBtn.classList.add("active");
    }

    let maxScrollValue = storiesContent.scrollWidth - storiesContent.clientWidth - 24;
    if (storiesContent.scrollLeft >= maxScrollValue) {
        nextBtn.classList.remove("active");
    } else {
        nextBtn.classList.add("active")
    }
})

const showFullView = (currentStoryIndex) => {
    currentActive = currentStoryIndex;
    updateFullView();
    storiesFullView.classList.add("active");

}

closeFullViewBtn.addEventListener("click", event => {
    storiesFullView.classList.remove("active");
})

previewFullViewBtn.addEventListener("click", event => {
    currentActive -= currentActive > 0 ? 1 : 0;
    updateFullView();
})

nextFullViewBtn.addEventListener("click", event => {
    currentActive += currentActive < allStories.length - 1 ? 1 : 0;
    updateFullView();
})

const updateFullView = () => {
    if (currentActive === 0) {
        previewFullViewBtn.classList.remove("active");
    } else if (currentActive === allStories.length - 1) {
        nextFullViewBtn.classList.remove("active");
    } else {
        previewFullViewBtn.classList.add("active");
        nextFullViewBtn.classList.add("active");
    }
    let storyFullView = document.querySelector(".stories-full-view .story")
    storyFullView.innerHTML = `
        <img src="${allStories[currentActive].imageUrl}" alt="">
        <div class="author">${allStories[currentActive].author}</div>
    `
}
