export default function isNomorPerkara(nomor_perkara) {
    if (String(nomor_perkara).split('/').length > 1) return true;
    return false;
}
