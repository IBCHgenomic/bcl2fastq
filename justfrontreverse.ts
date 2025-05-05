/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-1
*/

function justfrontreverse(): void {
          let index1 = document.getElementById("frontIndex1") as HTMLInputElement;
          let index1inference: Array<string> = index1.value.split("\n");
          console.log("The first indexes are:")
          for (let i = 0; i < index1inference.length; i++) {
                    console.log(`${index1inference[i]}.reverse()`)
          }
}
