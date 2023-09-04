
    // Função para abrir a imagem em tamanho maior ao clicar
    function abrirImagem(id) {
        var imagem = document.getElementById(id);
        var imagemAmpliada = document.createElement("div");
        imagemAmpliada.className = "imagem-ampliada";
        var imagemMaior = document.createElement("img");
        imagemMaior.src = imagem.src;
        imagemMaior.alt = imagem.alt;
        imagemAmpliada.appendChild(imagemMaior);
        document.body.appendChild(imagemAmpliada);

        // Fechar a imagem ao clicar nela
        imagemAmpliada.addEventListener("click", function () {
            document.body.removeChild(imagemAmpliada);
        });
    }

    

    // Função para alternar entre preto e branco e colorido
    function alternarEfeitoImagem(imagem) {
        if (imagem.style.filter === "grayscale(0%)") {
            imagem.style.filter = "grayscale(100%)";
        } else {
            imagem.style.filter = "grayscale(0%)";
        }
    }

    // Adicionar eventos de clique e mouseover para as imagens
    var imagens = document.querySelectorAll(".gallery img");
    imagens.forEach(function (imagem) {
        imagem.addEventListener("mouseover", function () {
            alternarEfeitoImagem(imagem);
        });

        imagem.addEventListener("mouseout", function () {
            alternarEfeitoImagem(imagem);
        });
    });

    var modal = document.createElement("div");
    modal.className = "modal";
    document.body.appendChild(modal);

    var modalImg = document.createElement("img");
    modalImg.className = "modal-img";
    modal.appendChild(modalImg);

    var closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    modal.appendChild(closeBtn);

    var images = document.querySelectorAll(".gallery img");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
    var modal = document.createElement("div");
    modal.className = "modal";
    document.body.appendChild(modal);

    var modalImg = document.createElement("img");
    modalImg.className = "modal-img";
    modal.appendChild(modalImg);

    var prevBtn = document.createElement("button");
    prevBtn.className = "prev-btn";
    prevBtn.innerHTML = "&#10094;";
    modal.appendChild(prevBtn);

    var nextBtn = document.createElement("button");
    nextBtn.className = "next-btn";
    nextBtn.innerHTML = "&#10095;";
    modal.appendChild(nextBtn);

    var closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "&times;";
    modal.appendChild(closeBtn);

    var images = document.querySelectorAll(".gallery img");
    var currentImageIndex = 0;

    function openModal(index) {
        modal.style.display = "block";
        modalImg.src = images[index].src;
        currentImageIndex = index;
    }

    images.forEach(function (image, index) {
        image.addEventListener("click", function () {
            openModal(index);
        });
    });

    prevBtn.addEventListener("click", function () {
        if (currentImageIndex > 0) {
            openModal(currentImageIndex - 1);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentImageIndex < images.length - 1) {
            openModal(currentImageIndex + 1);
        }
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });



