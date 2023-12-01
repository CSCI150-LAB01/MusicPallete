export const shareProfileLink = async () => {
    const uniqueLink = `musicpalette://profile/${userProfile?.id}`; // Use backticks
    try {
      await Share.share({
        message: `${uniqueLink}`, // Use backticks for template literal
      });
    } catch (error) {
      console.error('Error sharing profile link:', error);
    }
  };
  