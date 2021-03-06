export const postReview = (review) => (
  $.ajax({
    method: 'POST',
    url: `api//reviews`,
    data: { review }
  })
);

export const deleteReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
);
