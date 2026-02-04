// Reservation modal function
function showReservationModal() {
    const modalHtml = `
        <div class="modal fade" id="reservationModal" tabindex="-1" aria-labelledby="reservationModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="reservationModalLabel">Próximamente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Esta Funcionalidad estara próximamente disponible.
                    </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Entendido</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to body if it doesn't exist
    if (!document.getElementById('reservationModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('reservationModal'));
    modal.show();
}

// Login button functionality
document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            showBootstrapModal('Iniciar Sesión', 'Inicio de sesión próximamente disponible.');
        });
    }
});