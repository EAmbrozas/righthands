document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const submitButton = document.getElementById("submitButton");

    if (!contactForm) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const inputs = [nameInput, emailInput, phoneInput, messageInput];

    function showError(input) {
        const errorMessage = input.parentElement.querySelector(".error-message");

        input.classList.remove("border-gray-200");
        input.classList.add("border-red-600", "bg-red-50");

        if (errorMessage) {
            errorMessage.classList.remove("hidden");
        }
    }

    function clearError(input) {
        const errorMessage = input.parentElement.querySelector(".error-message");

        input.classList.remove("border-red-600", "bg-red-50");
        input.classList.add("border-gray-200");

        if (errorMessage) {
            errorMessage.classList.add("hidden");
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateForm() {
        let isValid = true;

        inputs.forEach((input) => {
            clearError(input);

            if (input.value.trim() === "") {
                showError(input);
                isValid = false;
            }
        });

        if (emailInput.value.trim() !== "" && !isValidEmail(emailInput.value.trim())) {
            showError(emailInput);
            isValid = false;
        }

        return isValid;
    }

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            if (input.value.trim() !== "") {
                clearError(input);
            }
        });
    });

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        formMessage.classList.add("hidden");

        if (!validateForm()) {
            formMessage.textContent = "Please fill in all required fields before sending.";
            formMessage.className =
                "rounded-2xl px-5 py-4 text-sm font-semibold bg-red-50 text-red-700 border border-red-200";
            return;
        }

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;
        submitButton.classList.add("opacity-70", "cursor-not-allowed");

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            setTimeout(() => {
                formMessage.textContent =
                    "Thank you. Your message has been sent successfully.";
                formMessage.className =
                    "rounded-2xl px-5 py-4 text-sm font-semibold bg-green-50 text-green-700 border border-green-200";

                contactForm.reset();

                submitButton.textContent = "Send Message";
                submitButton.disabled = false;
                submitButton.classList.remove("opacity-70", "cursor-not-allowed");
            }, 1000);
        } catch (error) {
            formMessage.textContent =
                "Something went wrong. Please try again or contact us directly.";
            formMessage.className =
                "rounded-2xl px-5 py-4 text-sm font-semibold bg-red-50 text-red-700 border border-red-200";

            submitButton.textContent = "Send Message";
            submitButton.disabled = false;
            submitButton.classList.remove("opacity-70", "cursor-not-allowed");
        }
    });
});