document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Collapse other items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            // Toggle the current item
            item.classList.toggle('active');
        });
    });
});
