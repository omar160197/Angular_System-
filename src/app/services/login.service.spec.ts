import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    service = new LoginService();
  });

  afterEach(()=>{
  localStorage.removeItem('token');

  })

  it('should return true from isAuth function if tere is token', () => {
    //act 
    localStorage.setItem('token','123')
    //assert 
    expect(service.isAuth()).toBeTruthy();
  });

  it('should return false from isAuth function if tere is no token', () => {

    expect(service.isAuth()).toBeFalse();
  });
});
