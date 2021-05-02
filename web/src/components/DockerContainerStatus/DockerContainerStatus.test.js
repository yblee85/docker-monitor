import { render, screen } from '@testing-library/react';
import ContainerStatus from './DockerContainerStatus';

const mockData = {
    Id : "test",
    Image : "test_image",
    Names : ['/test'],
    Ports : [ { PrivatePort : 80 } ],
    Created : 1000000
};

test('renders container stat', () => {
  render(<ContainerStatus status={mockData} />);
  const linkElement = screen.getByText(/Inspect/i);
  expect(linkElement).toBeInTheDocument();
});
