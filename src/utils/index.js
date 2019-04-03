export function containsAll(needles, arr) {
	for (const i in needles) {
		if(!arr.includes(needles[i])) return false;
	}
	return true;
}
