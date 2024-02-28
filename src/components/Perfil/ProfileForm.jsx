import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileForm.css';

function ProfileForm() {
  const [photo, setPhoto] = useState(null);
  const [userData, setUserData] = useState({
    username: '',  // Cambiado de 'website' a 'username'
    name: '',
    bio: '',
    showSuggestions: false,
  });

  const defaultProfileImage = 'https://cdn-icons-png.flaticon.com/128/1946/1946392.png';

  useEffect(() => {
    // Función para obtener la información del usuario desde el backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/usuarios/1');  // Reemplaza 1 con el ID del usuario actual
        const user = response.data;

        // Establecer el estado con la información del usuario
        setUserData({
          username: user.username,
          name: user.name || '',
          bio: user.bio || '',
          showSuggestions: user.showSuggestions || false,
        });
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };

    // Llama a la función para obtener la información del usuario al montar el componente
    fetchUserData();
  }, []);  // El segundo argumento del useEffect es un array de dependencias, en este caso, vacío

  const handlePhotoChange = (event) => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto ? URL.createObjectURL(selectedPhoto) : defaultProfileImage);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setUserData({ ...userData, [name]: inputValue });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envía la información del usuario al backend
      await axios.post('/api/actualizarPerfil', userData);

      // Manejar éxito de la actualización del perfil
      console.log('Perfil actualizado con éxito');
    } catch (error) {
      // Manejar error de la actualización del perfil
      console.error('Error al actualizar perfil:', error);
    }
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
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userData.username}
            readOnly  // Para hacer el campo de solo lectura
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Presentación</label>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="10"
            value={userData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="showSuggestions">
            Mostrar sugerencias de cuentas en los perfiles
          </label>
          <input
            type="checkbox"
            name="showSuggestions"
            id="showSuggestions"
            checked={userData.showSuggestions}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleFormSubmit}>Enviar</button>
      </div>
    </section>
  );
}

export default ProfileForm;
