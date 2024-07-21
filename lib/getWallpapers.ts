export async function getWallpapers() {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow' as RequestRedirect
  };

  try {
    // Primera solicitud para obtener la lista de wallpapers
    const response = await fetch('/api/search?categories=010&sorting=random', requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const wallpaperDetails = await Promise.all(
      data.data.map(async (wallpaper: any) => {
        const res = await fetch(`api/w/${wallpaper.id}`);
        const details = await res.json();
        return details.data; 
      })
    );
    return wallpaperDetails;
  } catch (error) {
    console.error('Failed to fetch wallpapers:', error);
    return [];
  }
}
