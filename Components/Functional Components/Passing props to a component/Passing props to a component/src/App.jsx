import './App.css'
import getImageUrl from './utils.js'

function Card({children}){
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}



function App() {
  return (
    <>
      <Card>
        <Avatar 
          person={{ 
            name: 'Lin Lanying', 
            imageId: '1bX5QH6'
          }} 
          size={100} 
        />
      </Card>
      <Card>
        <Avatar 
          size={80}
          person={{
            name: 'Aklilu Lemma',
            imageId: 'OKS67lh'
          }}
          />  
      </Card>
      <Card>
        <Avatar 
          size={50}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
          />  
      </Card>
    </>
  )
}

export default App

