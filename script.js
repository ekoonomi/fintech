
        // Modal Functions
        function openModal(type) {
            document.getElementById(type + '-modal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(type) {
            document.getElementById(type + '-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


        // Global functions for the HTML elements
        window.selectOption = selectOption;
        window.openModal = openModal;
        window.closeModal = closeModal;
