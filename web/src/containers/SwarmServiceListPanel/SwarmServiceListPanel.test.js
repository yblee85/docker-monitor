import { render, screen } from '@testing-library/react';
import SwarmServiceListPanel from './SwarmServiceListPanel';

const mockData = [{
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
}];

test('renders service stat list', () => {
  render(<SwarmServiceListPanel service_stats={mockData} />);
  const linkElement = screen.getByText(/Service ID/i);
  expect(linkElement).toBeInTheDocument();
});
