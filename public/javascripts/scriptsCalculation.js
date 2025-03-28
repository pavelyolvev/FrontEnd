document.addEventListener("DOMContentLoaded", function() {
    // Обработчик события для изменения текста кнопки "Статус"
    document.getElementById('statusButton').addEventListener('click', function() {
        this.textContent = 'Актуализировать';
    });

    // Пример использования функции для изменения текста элемента
    const calculations = document.querySelectorAll(".calculation");
    calculations.forEach(calculation => {
        const status = calculation.querySelector(".calculation-status").textContent;
        if (status === "Заключен договор") {
            const trashIcon = calculation.querySelector(".bi-trash");
            if (trashIcon) {
                trashIcon.style.display = "none";
            }
        }
    });

    // Обработчик события для изменения количества этажей
    const floorCountSelect = document.getElementById("floorCount");
    if (floorCountSelect) {
        const floorHeading = document.querySelector(".source-data-container h3");
        floorCountSelect.addEventListener("change", function() {
            const selectedFloorCount = floorCountSelect.value;
            floorHeading.textContent = `${selectedFloorCount} этаж${getFloorSuffix(selectedFloorCount)}`;
        });
    }

    function getFloorSuffix(count) {
        if (count === "1") {
            return "";
        } else if (count >= "2" && count <= "4") {
            return "а";
        } else {
            return "ов";
        }
    }

});

function goBack(){
    const pathParts = window.location.pathname.split("/"); // Разбиваем URL на части
    const clientId = pathParts[2]; // Получаем clientId (он находится на 2-м месте в массиве)

    if (clientId) {
        window.location.href = `http://localhost:3000/client/${clientId}`;
    }
}
function onClickEdit(){
    const currentUrl = window.location.href; // Текущий URL
    const newUrl = currentUrl.replace(/\/result$/, ""); // Убираем `/carcas/result`
    window.location.href = newUrl; // Перенаправляем пользователя
}

function openCalculationPage(clientId, calculationId) {
    // Здесь вы можете добавить код для открытия новой страницы с расчетом
    console.log("Открыть страницу расчета:", calculationId);
    window.location.href = clientId+"/"+calculationId+"/carcas";
}

document.addEventListener("DOMContentLoaded", function() {
    const clientInfo = document.querySelector(".client-info");
    const createClientModal = new bootstrap.Modal(document.getElementById("createClientModal"));

    clientInfo.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке, если это ссылка
        createClientModal.show();
    });
});