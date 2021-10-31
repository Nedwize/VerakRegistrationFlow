function App() {
  return (
    <div className="container">
      <div className="login-container">
        <p
          style={{ textTransform: 'uppercase', fontWeight: '600', margin: '0' }}
        >
          Welcome To
        </p>
        <p
          style={{
            textTransform: 'lowercase',
            color: '#4da232',
            fontWeight: '900',
            fontSize: '3rem',
            margin: '0',
          }}
        >
          app<span style={{ color: '#363636', fontWeight: '200' }}>ivo</span>
        </p>
        <p>
          <strong>Software has never been so simple.</strong>
        </p>
        <input type="email" placeholder="Email address"></input>
        <button>CONTINUE</button>
        <p className="divider">
          <span>or login with</span>
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <button>LinkedIn</button>
          <button>Facebook</button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: '0.65rem',
            margin: '10px 0',
            fontWeight: '700',
          }}
        >
          <a href="https://www.behance.net/gallery/117286095/Sign-up-billing-and-payments-Appivo">
            Don't have an account?
          </a>
          <p style={{ margin: '0 5px', color: '#4da232' }}> / </p>
          <a href="https://www.behance.net/gallery/117286095/Sign-up-billing-and-payments-Appivo">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
