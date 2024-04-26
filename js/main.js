$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });



        // Ambil semua elemen dropdown
        var dropdowns = document.querySelectorAll('.header__dropdown');
    
        // Loop melalui setiap dropdown dan tambahkan event listener
        dropdowns.forEach(function(dropdown) {
            var dropdownContent = dropdown.querySelector('.header__dropdown-content');
    
            // Tambahkan event listener ke setiap tombol dropdown
            dropdown.addEventListener('click', function(event) {
                // Tutup semua dropdown terbuka
                dropdowns.forEach(function(d) {
                    var content = d.querySelector('.header__dropdown-content');
                    if (d !== dropdown && content.style.display === 'block') {
                        content.style.display = 'none';
                    }
                });
    
                // Toggle tampilan dropdown content
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
                event.stopPropagation(); // Hindari event bubbling
            });
    
            // Menyembunyikan dropdown ketika klik di luar dropdown
            window.addEventListener('click', function(event) {
                if (!dropdown.contains(event.target)) {
                    dropdownContent.style.display = 'none';
                }
            });
        });
