import { render, screen } from '@testing-library/react';
import DockerContainerListPanel from './DockerContainerListPanel';

const mockData = [{
    Id : "test",
    Names : ['/test'],
    Ports : [ { PrivatePort : 80 } ],
    Created : 1000000
}];

test('renders container stat list', () => {
  render(<DockerContainerListPanel container_stats={mockData} />);
  const linkElement = screen.getByText(/Image/i);
  expect(linkElement).toBeInTheDocument();
});
