const commonString = (str1, str2) => {
 let common = '';
 let len1 = str1.length;
 let len2 = str2.length;
 for (let i = 0; i < len1; i++) {
    let match = '';
    for (let j = 0; j < len2; j++) {
        if ((i + j < len1) && str1[i + j] === str2[j]) {
            match += str2[j];
        } else {
            if (match.length > common.length) {
                common = match;
                match = '';
            }
        }
    }
 }
 return common;
}