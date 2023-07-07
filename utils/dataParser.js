export const dataParser = (data) => {
  const [tagSection, children] = data.slice(1, -4).split('>')
  const [element, attributes] = tagSection.split(' ')
  const value = attributes.split('=')[1]
  return {
    children: children.trim(),
    element,
    value: value.replace(/"/g, ''),
  }
}
