export default function filterVisibleResults(
  results,
  query,
) {
  return results.filter((result) => result.label.includes(query));
}
