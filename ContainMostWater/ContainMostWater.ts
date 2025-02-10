var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calcul de la surface actuelle
        let water = Math.min(height[left], height[right]) * (right - left);
        // Mise à jour de la surface maximale
        maxWater = Math.max(maxWater, water);

        // Déplacer le pointeur le plus court
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

export { maxArea };