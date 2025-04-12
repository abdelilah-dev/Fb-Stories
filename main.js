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
const previewBtn = document.querySelector(".stories-container .previous-btn");
const nextBtn = document.querySelector(".stories-container .next-btn");
const previewFullViewBtn = document.querySelector(".stories-full-view .previous-btn");
const nextFullViewBtn = document.querySelector(".stories-full-view .next-btn");

let currentActive = 0;

// window.onload = () => {
//     console.log("page is loaded");
//     createStories()
// }

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
    console.log(currentActive)
    updateFullView();
})

nextFullViewBtn.addEventListener("click", event => {
    currentActive += currentActive < allStories.length - 1 ? 1 : 0;
    console.log(currentActive)
    updateFullView();
})

const updateFullView = () => {
    let storyFullView = document.querySelector(".stories-full-view .story")
    storyFullView.innerHTML = `
        <img src="${allStories[currentActive].imageUrl}" alt="">
        <div class="${allStories[currentActive].author}">Author</div>
    `
}
