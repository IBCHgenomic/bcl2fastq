/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-1
*/

/*
 typescript illumina interface
*/

function frontadd(): void {
          let index1 = document.getElementById("frontIndex1") as HTMLInputElement;
          let index2 = document.getElementById("frontIndex2") as HTMLInputElement;
          let addition = document.getElementById("frontbp") as HTMLInputElement;
          let index1inference: Array<string> = index1.value.split("\n");
          let index2inference: Array<string> = index2.value.split("\n");
          console.log("The first indexes are:")
          for (let i = 0; i < index1inference.length; i++) {
                    console.log(`${addition}${index1inference[i]}`)
          }
          console.log("The second indexes are: ")
          for (let i = 0; i < index2inference.length; i++) {
                    console.log(`${addition}${index2inference[i]}`)
          }
}
