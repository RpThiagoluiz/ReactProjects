import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter Component', () => {
  it('should display elements with counter zero', () => {
    render(<Counter initialCount={0} />);

    expect(
      screen.getByRole('heading', {
        name: 'Count: 0',
      })
    ).toBeInTheDocument();

    // screen.debug(); // render do html.
  });

  it('should increment one when click at increment counter', () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole('button', { name: 'Increment' });

    expect(buttonIncrement).toBeEnabled();

    fireEvent.click(buttonIncrement);

    expect(
      screen.getByRole('heading', {
        name: 'Count: 1',
      })
    ).toBeInTheDocument();
  });

  it('should decrement one when click at decrement counter', () => {
    render(<Counter initialCount={20} />);

    const buttonDecrement = screen.getByRole('button', { name: 'Decrement' });

    expect(buttonDecrement).toBeEnabled();

    fireEvent.click(buttonDecrement);

    expect(
      screen.getByRole('heading', {
        name: 'Count: 19',
      })
    ).toBeInTheDocument();
  });

  it('should restart to zero when click at restart counter', () => {
    render(<Counter initialCount={430} />);

    const buttonRestart = screen.getByRole('button', { name: 'Restart' });

    expect(buttonRestart).toBeEnabled();

    fireEvent.click(buttonRestart);

    expect(
      screen.getByRole('heading', {
        name: 'Count: 0',
      })
    ).toBeInTheDocument();
  });

  it('should restart to zero when click at restart counter', () => {
    render(<Counter initialCount={30} />);

    const buttonSwitchSigns = screen.getByRole('button', {
      name: 'Switch Signs',
    });

    expect(buttonSwitchSigns).toBeEnabled();

    fireEvent.click(buttonSwitchSigns);

    expect(
      screen.getByRole('heading', {
        name: 'Count: -30',
      })
    ).toBeInTheDocument();
  });
});
