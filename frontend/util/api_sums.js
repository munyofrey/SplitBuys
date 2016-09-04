export const fetchSums = (success, error) => (
  $.ajax({
    url: `/api/sums`,
    method: 'GET',
    success,
    error
  })
)
