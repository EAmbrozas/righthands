const reviews = [
    {
        name: "Claire Bulmer",
        service: "En-suite & Bathroom Upgrade",
        text: "Excellent work carried out. Full en-suite re-fit and bathroom upgrade completed to a very high standard."
    },
    {
        name: "Pradeep Pai",
        service: "Flooring & Tiling",
        text: "Very honest and helpful. The quality of work was excellent and the advice given throughout was very useful."
    },
    {
        name: "Keith Whelan",
        service: "Two Bathroom Renovations",
        text: "Amazing job on our two bathrooms. The team took responsibility and fitted everything exactly the way we wanted."
    },
    {
        name: "Inesh Shanaka",
        service: "Flooring & Bathroom Renovation",
        text: "Excellent from start to finish. Professional, fast, detail-oriented, and the final result was fantastic."
    },
    {
        name: "Ronan Farrell",
        service: "Home Renovation",
        text: "Couldn’t be happier with the quality of the work. Very clean, tidy, efficient, and reasonably priced."
    },
    {
        name: "Becky Dowdall",
        service: "Bathroom Renovation",
        text: "Cannot recommend this company highly enough. Bathrooms finished to the highest standard with minimal mess."
    },
    {
        name: "Noel McGree",
        service: "Shower & Tiling",
        text: "Great work fitting a new shower enclosure and tiling. Completed within budget and ahead of schedule."
    },
    {
        name: "Carmel Gibson",
        service: "Shower Room Revamp",
        text: "Professional, reliable, and trustworthy service. Very high standard of work and highly recommended."
    },
    {
        name: "Dami Okeunji",
        service: "Bathroom Remodel",
        text: "Amazing bathroom remodel. Great communication, always on time, and the work was completed quickly."
    },
    {
    name: "David C",
    service: "Bathroom Remodel",
    text: "From the first consultation through to the final day, the entire process was professional and well organised. The workmanship was exceptional and the attention to detail throughout the renovation really stood out."
    },
    {
        name: "Jason McLeod",
        service: "Renovation Work",
        text: "Very neat and organised work from start to finish. Everything was technically correct before work even began and the team kept the place clean throughout."
    },
    {
        name: "C Ebbs",
        service: "Bathroom Renovation",
        text: "Top quality workmanship and very easy to deal with throughout the project. Helpful recommendations, excellent communication, and a fantastic finished result."
    },
    {
        name: "Neeraj Sharma",
        service: "Bathroom Installation",
        text: "Professional and accommodating from consultation to completion. Shower doors, glass panels, and bathroom fittings were installed to a very high standard."
    },
    {
        name: "Marcella Moroney",
        service: "Bathroom Refurbishment",
        text: "Our bathroom was fully refurbished to an excellent standard. The work was completed professionally, always left clean, and caused minimal disruption to family life."
    },
    {
        name: "Luke Tracey",
        service: "Full Bathroom Renovation",
        text: "Right Hands completely transformed our old bathroom with new tiling, fittings, and finishing work. The final result looked modern, clean, and professionally completed."
    },
    {
        name: "Declan Connor",
        service: "Multi-Trade Renovation",
        text: "We’ve used Right Hands for plumbing, carpentry, electrical work, and landscaping projects. Every job has been completed professionally with excellent workmanship."
    },
    {
        name: "Angie Curran",
        service: "Luxury Bathroom Renovation",
        text: "A pleasure to work with from start to finish. Spotlessly clean workmanship and incredible results — it genuinely feels like a five-star hotel bathroom now."
    },
    {
        name: "B H",
        service: "Wet Room Renovation",
        text: "Right Hands came up with the perfect solution for our upstairs shower room. Flooring and tiles were repaired and replaced beautifully, and the final result exceeded expectations."
    },
    {
        name: "Marsha Kenny",
        service: "Bathroom Transformation",
        text: "Our outdated bathroom was completely transformed into a modern space with beautiful tiling and finishes. Very professional service and highly recommended."
    },
    {
        name: "Miriam Murphy",
        service: "Home Renovation",
        text: "Clean, efficient service and excellent quality workmanship. The team were professional throughout and very easy to work with."
    },
    {
        name: "Becky Lawlor",
        service: "Bathroom Renovations",
        text: "Right Hands went above and beyond while transforming our bathrooms. Trustworthy, reliable, reasonably priced, and finished to an exceptional standard."
    },
    {
        name: "Ruslana H",
        service: "Bathroom Upgrade",
        text: "Professional advice, punctual service, and high-quality workmanship throughout the project. The final bathroom renovation was both practical and beautifully finished."
    },
    {
        name: "John Doran",
        service: "Home Improvement",
        text: "Extensive work completed to an excellent standard. Very professional service with great attention to detail and reliable communication throughout."
    },
    {
        name: "Hilary Nic Íomhair",
        service: "Exterior Property Work",
        text: "Excellent workmanship from start to finish. Everything was completed professionally and the property was left spotless afterwards."
    },
    {
        name: "K L",
        service: "Bathroom Tiling",
        text: "Very professional and helpful throughout the project. Arrived on time, helped source materials, and delivered a fantastic bathroom finish."
    },
    {
        name: "Temiola Adetula",
        service: "Home Renovation",
        text: "A true professional from start to finish. Extremely punctual, reliable, and committed to delivering high standards of workmanship."
    }
];

const reviewsGrid = document.getElementById("reviews-grid");
const loadMoreBtn = document.getElementById("load-more-reviews");

let visibleReviews = 0;
const reviewsPerLoad = 6;

function createReviewCard(review) {
    return `
        <article class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
            <div class="flex gap-1 mb-6 text-red-600">
                ★ ★ ★ ★ ★
            </div>

            <p class="text-gray-600 leading-relaxed mb-8">
                “${review.text}”
            </p>

            <div>
                <h3 class="font-bold text-gray-900">
                    ${review.name}
                </h3>

                <p class="text-sm text-gray-500 mt-1">
                    ${review.service}
                </p>
            </div>
        </article>
    `;
}

function loadReviews() {
    const nextReviews = reviews.slice(visibleReviews, visibleReviews + reviewsPerLoad);

    nextReviews.forEach(review => {
        reviewsGrid.insertAdjacentHTML("beforeend", createReviewCard(review));
    });

    visibleReviews += reviewsPerLoad;

    if (visibleReviews >= reviews.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadMoreBtn.addEventListener("click", loadReviews);

loadReviews();