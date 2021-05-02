import { render, screen } from '@testing-library/react';
import SwarmServiceStatus from './SwarmServiceStatus';

const mockData = {
    ID : "test",
    Spec : {
        Name : "test",
        Mode : {},
        TaskTemplate : {
            ContainerSpec : {
                Image : "test_image"
            }
        }
    },
    CreatedAt : 100000
};

test('renders status stat', () => {
  render(
    <SwarmServiceStatus 
        status={mockData} 
    />
    );

  const linkElement = screen.getByText(/Tasks/i);
  expect(linkElement).toBeInTheDocument();
});
