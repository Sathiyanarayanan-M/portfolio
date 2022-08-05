import * as Firebase from "firebase/firestore";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const useGetSingleProjectByTitle = async (title: string) => {
  const { querySnapshot } = Hooks.useFirestore();

  const doc = await querySnapshot(
    `projects`,
    Firebase.where("title", "==", title)
  );

  return {
    data: doc
      .data[0] as unknown as Pages.Admin.Pages.ManageProjects.MainTypes.FormValues,
    docID: doc.docIDs[0],
  };
};
