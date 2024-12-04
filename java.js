const coupons = [
    {
        id: 1,
        title: "🐶 Puppy Play Date",
        desc: "A fun day with your dogs! Walks, treats, and belly rubs—all handled by me!",
        img: "dogs.jpeg",
        tag: "Play Date",
        redeemed: false
    },
    {
        id: 2,
        title: "🍕 Cheat Day Feast",
        desc: "Binge-eating marathon! I’ll join you guilt-free for every snack and bite!",
        img: "food.jpg",
        tag: "Feast",
        redeemed: false
    },
    {
        id: 3,
        title: "🎥 Horror Movie Marathon",
        desc: "Blankets, popcorn, and jumpscares! Let’s face the ghosts together!",
        img: "horror.jpg",
        tag: "Scare Night",
        redeemed: false
    },
    {
        id: 4,
        title: "💤 Sleepover Shenanigans",
        desc: "An unforgettable night of gossip, snacks, and laughter—no sleep allowed!",
        img: "Sleepover.jpg",
        tag: "Sleepover",
        redeemed: false
    },
    {
        id: 5,
        title: "🛍️ Shopping Sidekick",
        desc: "I’ll carry your bags, stand in queues, and help you shop till you drop!",
        img: "Shopping.jpg",
        tag: "Shopping Spree",
        redeemed: false
    }
];

const couponContainer = document.getElementById("coupon-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const redeemBtn = document.getElementById("redeem-btn");
let currentCoupon = null;

// Render Coupons
function renderCoupons() {
    couponContainer.innerHTML = "";
    coupons.forEach(coupon => {
        const couponDiv = document.createElement("div");
        couponDiv.className = `coupon ${coupon.redeemed ? 'redeemed' : ''}`;
        couponDiv.innerHTML = `
            <span class="tag ${coupon.redeemed ? 'redeemed-tag' : ''}">${coupon.redeemed ? 'Redeemed' : coupon.tag}</span>
            <img src="${coupon.img}" alt="${coupon.title}">
            <h3>${coupon.title}</h3>
            <p>${coupon.desc}</p>
        `;
        couponDiv.onclick = () => showCoupon(coupon.id);
        couponContainer.appendChild(couponDiv);
    });
}

// Show Coupon Details
function showCoupon(id) {
    const coupon = coupons.find(c => c.id === id);
    if (!coupon || coupon.redeemed) return alert("This coupon has already been redeemed!");
    currentCoupon = coupon;
    modalImg.src = coupon.img;
    modalTitle.textContent = coupon.title;
    modalDesc.textContent = coupon.desc;
    modal.style.display = "flex";
}

// Close Modal
function closeModal() {
    modal.style.display = "none";
}

// Redeem Coupon
function redeemCoupon() {
    if (!currentCoupon) return;
    currentCoupon.redeemed = true;
    modal.style.display = "none";
    alert(`"${currentCoupon.title}" has been redeemed!`);
    renderCoupons();
}

// Initialize
renderCoupons();
