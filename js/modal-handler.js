function openModal(title, imageSrc, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('orderLink').href = "https://wa.me/?text=I'm%20interested%20in%20ordering%20" + encodeURIComponent(title);
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}