import '../stylesheets/MainContent.css'
import UserForm from './UserForm';

function MainContent() {
  return (
      <main className='main-content-box'>
          <div className='main-content-box-column'>
              <UserForm>
              </UserForm>
          </div>
      </main>
    );
}

export default MainContent;