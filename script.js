document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    const styleToggle = document.getElementById('styleToggle');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    styleToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('old-school');
        } else {
            document.body.classList.remove('old-school');
        }
    });
});
