module.exports = {
    isNomorPerkara: (nomor_perkara) => {
        if (String(nomor_perkara).split('/') > 1) return true;
        return false;
    }
};
