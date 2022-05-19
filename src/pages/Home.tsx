import { BaseButton } from "../components/IconButton";
import { Row } from "../components/Flex";

export default (props: any) => {
  const openAddPatientModal = () => {
    //Todo:  opens add patient modal
  };
  return (
    <Row justify="space-between" align="center">
      <h1>Home</h1>{" "}
      <Row width="fit-content">
        <BaseButton
          onClick={openAddPatientModal}
          color="white"
          background="secondary"
        >
          Add Patient
        </BaseButton>
      </Row>
    </Row>
  );
};
