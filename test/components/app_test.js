import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests
describe('App', () => {

  it('shows the correct text', () => {

    const component = renderComponent(App);
    expect(component).to.contain('React simple starter');
  });

});