import React, { useState, useEffect } from 'react';

import './ProfileForm.css';

function ProfileForm() {
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const defaultProfileImage = 'https://cdn-icons-png.flaticon.com/128/1946/1946392.png';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obtener el token almacenado en localStorage después del inicio de sesión
        const token = localStorage.getItem('authToken');
        console.log('Token almacenado en localStorage:', token);

        const response = await fetch('http://localhost:3000/getUserInfo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData.user || '');
          setPhone(userData.phone || '');
          setEmail(userData.email || '');
          setPhoto(userData.photo || defaultProfileImage);
        } else {
          console.error('Error al obtener datos del usuario');
        }
      } catch (error) {
        console.error('Error de red:', error);
        // Puedes mostrar un mensaje de error al usuario si es apropiado
      }
    };

    fetchUserData();
  }, []); 

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto ? URL.createObjectURL(selectedPhoto) : defaultProfileImage);
  };

  return (
    <section className='section-perfil'>
      <div className="profile-editor">
        <h2>Editar perfil</h2>

        <div className="form-group circular-photo-container">
          <img className="profile-photo" src={photo || defaultProfileImage} alt="Perfil" />
          
          <div className="option-cambiar">
            <label htmlFor="photo">Cambiar foto</label>
            <input className='input-cambiar' type="file" name="photo" id="photo" onChange={handlePhotoChange} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="user">Usuario:</label>
          <input
            className='input-user'
            type="text"
            name="user"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            className='input-phoneNumber'
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            className='input-email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button>Enviar</button>
      </div>
    </section>
  );
}

export default ProfileForm;
