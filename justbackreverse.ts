/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-1
*/

function justbackreverse(): void {
          let index2 = document.getElementById("frontaddrevIndex2") as HTMLInputElement;
          let index2inference: Array<string> = index2.value.split("\n");
          console.log("The second indexes are: ")
          for (let i = 0; i < index2inference.length; i++) {
                    console.log(`${index2inference[i]}.reverse()`)
          }
}
